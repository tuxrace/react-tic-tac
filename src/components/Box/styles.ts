import { Theme } from "@material-ui/core"

const styles = (theme: Theme) => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        },
        boxStyle: {
          width: theme.spacing(10),
          height: theme.spacing(10)
        }
})

export default styles