import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung - Erklärung und mehr',
  description: 'Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.',
};

export default function DatenschutzPage() {
  return (
    <div className="site-wrapper">
      <Header activePath="/datenschutz" />

      {/* Main Content */}
      <main className="content-container">
        <div className="legal-paper">
          <h1 className="legal-title">Datenschutzerklärung</h1>
          <p className="legal-lead">
            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2021).
          </p>

          <section className="legal-block">
            <h2>1. Verantwortlicher</h2>
            <p>
              Verantwortlicher im Sinne der EU-Datenschutz-Grundverordnung (DSGVO) und sonstiger datenschutzrechtlicher Bestimmungen ist:
            </p>
            <p>
              <strong>Matthias Gmeiner e.U.</strong><br />
              Herrengutgasse 16b<br />
              6923 Lauterach<br />
              Österreich<br />
              <strong>E-Mail:</strong> <a href="mailto:m3m3m4u@gmail.com">m3m3m4u@gmail.com</a><br />
              <strong>Telefon:</strong> +43 664 4714108
            </p>
          </section>

          <section className="legal-block">
            <h2>2. Ihre Betroffenenrechte</h2>
            <p>
              Unter den angegebenen Kontaktdaten können Sie jederzeit folgende Rechte gemäß DSGVO ausüben:
            </p>
            <ul className="legal-list">
              <li><strong>Recht auf Auskunft (Art. 15 DSGVO):</strong> Auskunft über Ihre bei uns verarbeiteten personenbezogenen Daten.</li>
              <li><strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Unverzügliche Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten.</li>
              <li><strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Löschung Ihrer bei uns gespeicherten Daten, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</li>
              <li><strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Einschränkung der Datenverarbeitung unter bestimmten Voraussetzungen.</li>
              <li><strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Erhalt Ihrer Daten in einem strukturierten, gängigen und maschinenlesbaren Format.</li>
              <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten.</li>
              <li><strong>Beschwerderecht:</strong> Sollten Sie der Ansicht sein, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie sich bei der zuständigen Aufsichtsbehörde beschweren (in Österreich: Österreichische Datenschutzbehörde, Barichgasse 40-42, 1030 Wien, <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer">www.dsb.gv.at</a>).</li>
            </ul>
          </section>

          <section className="legal-block">
            <h2>3. Bereitstellung der Website und Server-Logfiles</h2>
            <p>
              Beim Aufrufen unserer Website erfasst der Webserver automatisch technische Informationen (Server-Logfiles), die Ihr Browser an uns übermittelt. Dies umfasst:
            </p>
            <ul className="legal-list">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL (die zuvor besuchte Seite)</li>
              <li>Hostname des zugreifenden Rechners / IP-Adresse (anonymisiert)</li>
              <li>Uhrzeit der Serveranfrage</li>
            </ul>
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage unseres berechtigten Interesses gemäß Art. 6 Abs. 1 lit. f DSGVO zur Gewährleistung eines störungsfreien Betriebs, der Systemsicherheit und der technischen Optimierung der Website. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            </p>
          </section>

          <section className="legal-block">
            <h2>4. Cookies und lokale Speicherung (LocalStorage)</h2>
            <p>
              Unsere Website verwendet Cookies und die lokale Browserspeicherung (LocalStorage). Cookies sind kleine Textdateien, die auf Ihrem Endgerät abgelegt werden.
            </p>
            <p>
              <strong>Technisch notwendige Cookies / Speicherungen:</strong><br />
              Diese sind erforderlich, damit die Website und Kernfunktionen (wie die Navigation, die Cookie-Einwilligung und der Zustand von H5P-Lernmodulen) einwandfrei funktionieren. Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
            </p>
            <p>
              <strong>Optionale Cookies / Externe Medien:</strong><br />
              Werden nur gesetzt, wenn Sie im Cookie-Banner ausdrücklich eingewilligt haben (Art. 6 Abs. 1 lit. a DSGVO). Sie können Ihre Cookie-Einstellungen jederzeit über den Link „Cookie-Einstellungen“ im Footer anpassen oder widerrufen.
            </p>
          </section>

          <section className="legal-block">
            <h2>5. Interaktive H5P-Lerninhalte & xAPI</h2>
            <p>
              Auf unserer Website stellen wir interaktive H5P-Lernübungen bereit. Wenn Sie eine Übung bearbeiten, werden die Ergebnisse (Punkte, Bearbeitungsstand) lokal in Ihrem Browser verarbeitet, um Ihnen Feedback zu geben. Eine dauerhafte Speicherung von personenbezogenen Nutzerprofilen findet dabei standardmäßig nicht ohne Ihre Registrierung bzw. ausdrückliche Autorisierung statt.
            </p>
          </section>

          <section className="legal-block">
            <h2>6. Eingebundene YouTube-Videos</h2>
            <p>
              In einzelnen interaktiven Lernmodulen (z. B. H5P-Videopräsentationen) sind Videos der Plattform YouTube (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland) eingebunden.
            </p>
            <p>
              Beim Abspielen eines Videos wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird YouTube mitgeteilt, welche unserer Seiten Sie besucht haben und Ihre IP-Adresse wird übermittelt.
            </p>
            <p>
              Die Einbindung erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO, die Sie über das Cookie-Banner erteilen.
            </p>
          </section>

          <section className="legal-block">
            <h2>7. Kontaktaufnahme</h2>
            <p>
              Wenn Sie per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten (E-Mail-Adresse, Name, Inhalt Ihrer Nachricht) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung bzw. vorvertragliche Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section className="legal-block">
            <h2>8. SSL-/TLS-Verschlüsselung</h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </section>

          <section className="legal-block">
            <h2>9. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig (Stand: August 2026). Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung anzupassen.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer activePath="/datenschutz" />
    </div>
  );
}
