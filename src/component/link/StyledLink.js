import {theme} from "../../theme/theme";
import {Link} from "@mui/material";
import * as util from "../../util/util";

export const StyledLink = ({value}) => {
    return (
        <Link
            href={util.path(value)}
            underline="none"
            sx={{
                "&:hover": {color: theme.palette.secondary.main },
                marginLeft: "8px",
                marginTop: "32px",
                marginBottom: "32px",
                marginRight: "64px",
                fontWeight: 500,
            }}>
            {value}
        </Link>
    )
}