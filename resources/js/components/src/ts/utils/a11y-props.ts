export const a11yProps = (index: number) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}
