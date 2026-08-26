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
            Der Schutz Ihrer persönlichen Daten und die Privatsphäre von Schüler:innen und Lehrpersonen ist uns ein zentrales Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2021). Nachfolgend informieren wir Sie über die Art, den Umfang und den Zweck der Datenerhebung auf unserer Lernplattform.
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
            <h2>3. Benutzerkonten für Lehrpersonen &amp; Schüler:innen (Datenschutzkonzept für Schulen)</h2>
            <p>
              Unsere Lernplattform bietet ein spezielles, datenschutzfreundliches Kontensystem für Schulen und Unterrichtszwecke:
            </p>
            
            <h3 style={{ fontSize: 16, marginTop: 14, marginBottom: 6 }}>a) Lehrpersonen-Accounts</h3>
            <p>
              Lehrpersonen können sich mit einer E-Mail-Adresse und einem selbst gewählten Passwort registrieren.
            </p>
            <ul className="legal-list">
              <li><strong>Verarbeitete Daten:</strong> E-Mail-Adresse, kryptografisch gehashtes Passwort (mittels bcrypt, kein Klartextpasswort), Erstellungsdatum.</li>
              <li><strong>Zweck:</strong> Bereitstellung des Lehrpersonen-Dashboards, Erstellung und Verwaltung von Schüler-Codes, Zuweisung von H5P-Übungen an Klassen, Einsicht in die aggregierten Fortschritte der zugewiesenen Klassen.</li>
              <li><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Erfüllung des Nutzungsverhältnisses).</li>
            </ul>

            <h3 style={{ fontSize: 16, marginTop: 14, marginBottom: 6 }}>b) Schüler:innen-Accounts (Vollständig pseudonymisiert / Privacy by Design)</h3>
            <p>
              Um die Privatsphäre von Minderjährigen maximal zu schützen, erheben wir bei Schüler:innen <strong>keine personenbezogenen Klardaten</strong> wie Namen, Geburtsdaten oder E-Mail-Adressen:
            </p>
            <ul className="legal-list">
              <li><strong>Pseudonyme Codes:</strong> Accounts für Schüler:innen werden von der Lehrperson im Dashboard generiert. Jeder Account besteht ausschließlich aus einem zufälligen, 5-stelligen Buchstabencode (z. B. <code>AB12C</code>) und einer Klassenbezeichnung (z. B. <code>4A</code>).</li>
              <li><strong>Keine Schülernamen auf dem Server:</strong> Die Zuordnung, welche/r Schüler:in welchen Code nutzt, verbleibt ausschließlich bei der jeweiligen Lehrperson (z. B. auf einer ausgedruckten Klassenliste). Auf unseren Servern werden zu keinem Zeitpunkt Schülernamen gespeichert.</li>
              <li><strong>Lernfortschritt &amp; Übungsergebnisse:</strong> Wenn ein/e Schüler:in mit seinem/ihrem Code eingeloggt ist und H5P-Übungen absolviert, werden die erreichten Punkte und der Zeitstempel dem pseudonymen Code zugeordnet. Dies ermöglicht den Schüler:innen, ihren eigenen Lernstand unter „Mein Fortschritt“ zu verfolgen, und der Lehrperson, den Lernfortschritt der Klasse im Dashboard einzusehen.</li>
              <li><strong>Löschung durch die Lehrperson:</strong> Lehrpersonen können einzelne Schüler-Codes oder ganze Klassen mitsamt allen Fortschrittsdaten jederzeit mit sofortiger Wirkung unwiderruflich im Dashboard löschen.</li>
              <li><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bereitstellung eines funktionierenden, pseudonymisierten Lernkontos).</li>
            </ul>
          </section>

          <section className="legal-block">
            <h2>4. Bereitstellung der Website und Server-Logfiles</h2>
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
            <h2>5. Cookies, Authentifizierung und lokale Speicherung</h2>
            <p>
              Unsere Website verwendet technisch notwendige Cookies sowie den lokalen Browserspeicher (LocalStorage):
            </p>
            <ul className="legal-list">
              <li>
                <strong>Authentifizierungs-Cookie (<code>auth_token</code>):</strong><br />
                Wenn Sie sich als Lehrperson oder Schüler:in anmelden, wird ein verschlüsseltes, sitzungsbasiertes HttpOnly-Cookie gesetzt, um Ihren Login-Status während der Sitzung aufrechtzuerhalten. Dieses Cookie ist für die Bereitstellung des geschützten Mitglieder- und Dashboard-Bereichs zwingend erforderlich (Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO, § 165 Abs. 3 TKG 2021).
              </li>
              <li>
                <strong>Lokale Speicherung (LocalStorage für H5P &amp; Einstellungen):</strong><br />
                Zur Zwischenspeicherung des Bearbeitungsstands interaktiver Übungen auf Ihrem Endgerät und zur Speicherung Ihrer Cookie-Präferenzen wird der lokale Browserspeicher genutzt.
              </li>
              <li>
                <strong>Optionale Drittanbieter-Inhalte (z. B. YouTube):</strong><br />
                Werden erst nach Ihrer ausdrücklichen Einwilligung im Cookie-Banner geladen (Art. 6 Abs. 1 lit. a DSGVO). Sie können Ihre Auswahl jederzeit über den Link „Cookie-Einstellungen“ im Footer anpassen oder widerrufen.
              </li>
            </ul>
          </section>

          <section className="legal-block">
            <h2>6. Interaktive H5P-Lerninhalte &amp; xAPI-Schnittstelle</h2>
            <p>
              Auf unserer Website stellen wir interaktive H5P-Lernmodule bereit. Beim Lösen von Aufgaben werden xAPI-Events zur Punkteermittlung generiert:
            </p>
            <ul className="legal-list">
              <li><strong>Ohne Login:</strong> Die Bearbeitung erfolgt rein lokal in Ihrem Browser; es werden keine Fortschrittsdaten auf unseren Servern gespeichert.</li>
              <li><strong>Mit Schüler-Code:</strong> Die erreichten Punkte werden dem pseudonymen Schüler-Account in unserer Datenbank zugeordnet, damit der Fortschritt gespeichert bleibt und der Lehrperson zur Lernbegleitung angezeigt werden kann.</li>
            </ul>
          </section>

          <section className="legal-block">
            <h2>7. Eingebundene YouTube-Videos</h2>
            <p>
              In einzelnen interaktiven Lernmodulen (z. B. H5P-Videopräsentationen) sind Lehrvideos der Plattform YouTube (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland) eingebunden.
            </p>
            <p>
              Beim Abspielen eines Videos wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird YouTube mitgeteilt, welche unserer Seiten Sie besucht haben und Ihre IP-Adresse wird übermittelt.
            </p>
            <p>
              Die Einbindung erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO, die Sie über das Cookie-Banner erteilen.
            </p>
          </section>

          <section className="legal-block">
            <h2>8. Kontaktaufnahme per E-Mail</h2>
            <p>
              Wenn Sie per E-Mail (z. B. über Feedback-Links oder direkte Anfragen) Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten (E-Mail-Adresse, Name, Inhalt Ihrer Nachricht) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO sowie Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section className="legal-block">
            <h2>9. SSL-/TLS-Verschlüsselung</h2>
            <p>
              Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung aller vertraulichen Daten (z. B. Login-Daten, Passwörter, Schüler-Codes und Anfragen) eine durchgehende SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an dem Präfix <code>https://</code> und dem Schloss-Symbol in der Adresszeile Ihres Browsers.
            </p>
          </section>

          <section className="legal-block">
            <h2>10. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig (Stand: August 2026). Durch die Weiterentwicklung unserer Lernplattform oder aufgrund geänderter gesetzlicher Bestimmungen kann es erforderlich werden, diese Datenschutzerklärung anzupassen. Die jeweils aktuelle Fassung ist stets auf dieser Seite abrufbar.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer activePath="/datenschutz" />
    </div>
  );
}
