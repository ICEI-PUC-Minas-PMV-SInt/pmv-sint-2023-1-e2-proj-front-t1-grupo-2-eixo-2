import IMGBANNER from "../../../assets/garota-e-lixo.png";

export function BannerArtigo() {
  return (
      <Paper 
        sx={{
          display: "flex",
          alignItems: "end",
          flexDirection: "column",
          justifyContent: "center",
          padding: 27,
          backgroundImage: `url(${IMGBANNER})`,
          height: 400,
          backgroundSize: "cover",
        }}
      >
      </Paper>
  );
}