import { Box } from '@material-ui/core';

const TabPanel = (props) => {
  const { children, value, index, id, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${id}-tabpanel-${index}`}
      aria-labelledby={`${id}-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={1}>{children}</Box>}
    </div>
  );
};

export default TabPanel;
