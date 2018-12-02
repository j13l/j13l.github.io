import Typography from "typography";
import Parnassus from "typography-theme-parnassus";

Parnassus.overrideThemeStyles = () => ({
  a: {
    color: "#F46197" //"#00f"
  }
});
const typography = new Typography(Parnassus);

export default typography;
