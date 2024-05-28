import { proxy } from "valtio";

export const state = proxy({
  intro: true,
  color: "#EFBD48",
  isLogoTexture: false,
  isFullTexture: false,
  logoDecal: "",
  fullDecal: "",
});
