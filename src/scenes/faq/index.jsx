import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How can I reduce my electricity bill without compromising on comfort and convenience?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Reducing your electricity bill while maintaining comfort and convenience involves adopting a multifaceted approach. One effective strategy is to prioritize the use of energy-efficient appliances. Look for devices with the ENERGY STAR label, which signifies they meet stringent energy efficiency standards. These appliances are designed to perform optimally while consuming less electricity. Moreover, forming habits like unplugging devices when they're not in use can prevent standby or phantom power consumption, which can add up over time. Adjusting your thermostat settings to a temperature that is comfortable yet energy-efficient can also make a significant difference. By integrating these practices into your daily routine, you can achieve substantial savings without compromising your lifestyle.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What are some practical tips for conserving electricity at home or in the workplace?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Practical electricity conservation tips encompass a range of actions that can be taken both at home and in the workplace. Begin by turning off lights and appliances when they are not needed. Utilizing power strips can simplify the process of disconnecting multiple devices simultaneously, making it easier to prevent energy waste. Proper insulation and sealing gaps in doors and windows are essential to maintaining a consistent indoor temperature. This not only enhances comfort but also reduces the need for excessive heating or cooling, resulting in energy savings. Cultivating energy-conscious habits such as avoiding the overloading of power outlets and minimizing the use of space heaters can further contribute to electricity conservation. In a workplace setting, consider implementing energy-saving policies and promoting awareness among employees to collectively reduce energy consumption.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Are there energy-efficient appliances and technologies I should consider to cut down on electricity consumption?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, there are numerous energy-efficient appliances and technologies to consider for reducing electricity consumption. When shopping for new appliances, prioritize those that carry the ENERGY STAR label. These appliances are designed to operate efficiently, which means they use less electricity while delivering the same or even better performance compared to non-certified models. In addition to appliances, lighting plays a significant role in electricity consumption. Replacing traditional incandescent bulbs with energy-efficient alternatives such as LED (light-emitting diode) or CFL (compact fluorescent lamp) bulbs can yield substantial savings. Smart thermostats are another valuable technology that allows you to optimize your heating and cooling systems by automatically adjusting temperatures when you're away or asleep. These investments may initially require an upfront cost but can lead to long-term electricity savings.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How can I create a more energy-efficient lighting system in my home or office?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          To establish a more energy-efficient lighting system, begin by replacing outdated incandescent bulbs with energy-efficient options such as LED or CFL bulbs. LED bulbs, in particular, are highly efficient and long-lasting, consuming significantly less electricity while providing ample illumination. To maximize natural lighting during the day, keep curtains or blinds open to allow sunlight to enter. Installing occupancy sensors or timers in rooms where lights tend to be inadvertently left on can be a smart strategy. These devices automatically turn off lights when a room is unoccupied, preventing unnecessary energy consumption. Furthermore, consider organizing your lighting system into zones with separate controls to adjust lighting levels as needed, reducing energy waste.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What are some long-term strategies for sustainable electricity savings, and how can I implement them effectively?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Long-term strategies for sustainable electricity savings involve more substantial investments and changes to your home or workplace infrastructure. One of the most impactful long-term approaches is investing in renewable energy sources, such as solar panels. Solar panels convert sunlight into electricity, reducing your reliance on grid power and potentially generating surplus energy that can be fed back into the grid or stored for later use. While the initial installation cost can be significant, the long-term savings and environmental benefits make it a compelling option for sustainable electricity generation. Additionally, enhancing your property's insulation and sealing gaps or cracks in walls, windows, and doors can create a more energy-efficient building envelope. This helps maintain a consistent indoor temperature, reducing the need for heating and cooling, which are major contributors to electricity consumption. Conducting an energy audit, either independently or with the help of a professional, can identify areas in your home or workplace where improvements can be made. By implementing these long-term strategies effectively, you can significantly reduce your electricity consumption and contribute to a more sustainable future.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
