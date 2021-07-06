import { Theme } from "@material-ui/core"

const styles = (theme: Theme) => ({
        boxStyle: {
          width: theme.spacing(12),
          height: theme.spacing(12),
          padding: 16,
          display: 'flex',
          justifyContent: 'space-around',
          margin: 0,
          border: '1px solid'
        },
        rotate: {
          transform: 'rotate(-180deg)',
          transitionDuration: '0.8s'
        }
})

export default styles