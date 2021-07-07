import { Theme } from "@material-ui/core"

const styles = (theme: Theme) => ({
        root: {
          flexGrow: 1,
          margin: theme.spacing(3, 0, 3, 0)
        },
        win: {
          color: 'blue',
          fontSize: 24,
          transform: 'scaleY(1.2)',
          transitionDuration: '0.8s'
        }
})

export default styles