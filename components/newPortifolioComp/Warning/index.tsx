// components/ScreenSizeWarning.js

const ScreenSizeWarning = ({ lang }: { lang: string }) => (
  <>
    {console.log(lang)}
    {((lang === "pt" || lang === "pt-BR") && (
      <div
        style={{ padding: "20px", background: "yellow", textAlign: "center" }}
      >
        <p>
          Aviso: Este layout está em desenvolvimento para telas pequenas.
          Recomendamos usar um dispositivo com uma largura de tela maior que
          1024 pixels para obter a melhor experiência.
        </p>
      </div>
    )) ||
      ((lang === "en" || lang === "en-US") && (
        <div
          style={{ padding: "20px", background: "yellow", textAlign: "center" }}
        >
          <p>
            Warning: This layout is under development for small screens. We
            recommend using a device with a screen width larger than 1024 pixels
            for the best experience.
          </p>
        </div>
      ))}
  </>
);

export default ScreenSizeWarning;
