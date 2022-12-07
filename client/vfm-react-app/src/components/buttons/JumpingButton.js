import {Button} from "@mui/material"
import { useNavigate } from "react-router-dom";

// A button that scrolls to the component with the provided id
const JumpingButton = ({variant, label, id}) => {
    let navigate = useNavigate()
    let onClick = () => {
        document.getElementById(id).scrollIntoView()
    }

    return (
        <Button onClick={onClick} color={"success"} variant={variant || "text"} sx={{marginRight: 2, fontWeight: "bold"}}> {label || "Scroll" } </Button>
    )
}

export default JumpingButton
