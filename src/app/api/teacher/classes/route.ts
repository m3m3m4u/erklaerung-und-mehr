import { getSession } from '@/lib/auth';
import { getDatabase } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

// DELETE /api/teacher/classes — Löscht eine gesamte Klasse mit allen Schüleraccounts und deren Fortschrittsdaten
export async function DELETE(request: Request) {
  const session = await getSession();
  if (!session || session.role !== 'teacher') {
    return Response.json({ error: 'Nicht autorisiert.' }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const className = typeof body.className === 'string' ? body.className.trim() : '';

  if (!className) {
    return Response.json({ error: 'Klassenname ist erforderlich.' }, { status: 400 });
  }

  const teacherId = new ObjectId(session.id);
  const db = await getDatabase();

  // Find all students belonging to this teacher with the given className
  const students = await db
    .collection('students')
    .find({
      teacherId,
      className: className === 'Ohne Klasse' ? { $in: ['', null, 'Ohne Klasse'] } : className,
    })
    .toArray();

  if (students.length === 0) {
    return Response.json({ error: 'Keine Schüleraccounts in dieser Klasse gefunden.' }, { status: 404 });
  }

  const studentIds = students.map((s) => s._id);

  // Delete all H5P progress records for these students
  await db.collection('h5p_progress').deleteMany({
    studentId: { $in: studentIds },
  });

  // Delete all students in this class
  const result = await db.collection('students').deleteMany({
    _id: { $in: studentIds },
  });

  return Response.json({
    ok: true,
    deletedCount: result.deletedCount,
    className,
  });
}
