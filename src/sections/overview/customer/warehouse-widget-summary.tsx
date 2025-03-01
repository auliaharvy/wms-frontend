import { ApexOptions } from 'apexcharts';
// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card, { CardProps } from '@mui/material/Card';
// utils
import { fNumber, fPercent } from 'src/utils/format-number';
// components
import Iconify from 'src/components/iconify';
import Chart from 'src/components/chart';

// ----------------------------------------------------------------------

interface Props extends CardProps {
  title: string;
  total: number;
  percent?: number;
  icon: string;
  chart?: {
    colors?: string[];
    series: number[];
    options?: ApexOptions;
  };
}

export default function AppWidgetSummary({ title, percent, total, chart, icon, sx,  ...other }: Props) {
  const theme = useTheme();

  // const {
  //   colors = [theme.palette.success.light, theme.palette.success.main],
  //   series,
  //   options,
  // } = chart;

//  const chartOptions = {
// colors,
// fill: {
// type: 'gradient',
// gradient: {
// colorStops: [
// { offset: 0, color: colors[0] },
// { offset: 100, color: colors[1] },
// ],
// },
// },
//     chart: {
//       sparkline: {
//         enabled: true,
//       },
//     },
//     plotOptions: {
//       bar: {
//         columnWidth: '68%',
//         borderRadius: 2,
//       },
//     },
//     tooltip: {
//       x: { show: false },
//       y: {
//         formatter: (value: number) => fNumber(value),
//         title: {
//           formatter: () => '',
//         },
//       },
//       marker: { show: false },
//     },
//     ...options,
//   };

  return (
    <Card sx={{ display: 'flex', alignItems: 'left', justifyContent: 'left', p: 3, ...sx }} {...other}>

      <Box sx={{ flexGrow: 1, textAlign:'left' }}>
        <Typography variant="subtitle2">{title}</Typography>

        {/* <Stack direction="row" alignItems="center" sx={{ mt: 2, mb: 1 }}>
          <Iconify
            width={24}
            icon={
              percent < 0
                ? 'solar:double-alt-arrow-down-bold-duotone'
                : 'solar:double-alt-arrow-up-bold-duotone'
            }
            sx={{
              mr: 1,
              color: 'success.main',
              ...(percent < 0 && {
                color: 'error.main',
              }),
            }}
          />

          <Typography component="div" variant="subtitle2">
            {percent > 0 && '+'}

            {fPercent(percent)}
          </Typography>
        </Stack> */}

        <Typography variant="h3">{fNumber(total)}</Typography>
      </Box>

      {/* <Chart type="bar" series={[{ data: series }]} options={chartOptions} width={60} height={36} /> */}
    </Card>
  );
}
