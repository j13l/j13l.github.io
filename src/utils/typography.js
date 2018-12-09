import Typography from "typography";
import Parnassus from "typography-theme-parnassus";

export const colorPrimary = "#F46197";

Parnassus.overrideThemeStyles = () => ({
  a: {
    color: colorPrimary //"#00f"
  }
});
const typography = new Typography(Parnassus);

export default typography;
