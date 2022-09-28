import React, { FunctionComponent } from 'react'
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@mui/icons-material/Close';

type AppBarProps = {
    title: string,
    onClose: () => void,
    className?: string
}

const AppBar: FunctionComponent<AppBarProps> = ({ title, onClose, className }) => {
    return (
        <>
            <Grid container justify="space-between" className={`appbar ${className}`}>
                <Grid item>
                    <Grid container spacing={3}>
                        {
                            className !== 'blue' && className !== 'white' && className !== 'orange' &&
                            <Grid item>
                                <CloseIcon onClick={onClose} />

                            </Grid>
                        }
                        <Grid item>
                            <div className="header-title">{title}</div>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item>

                    {
                        className !== 'blue' && className !== 'white' && className !== 'orange' ?

                            <CloseIcon onClick={onClose} />
                            :
                            <CloseIcon onClick={onClose} />

                    }
                </Grid>
            </Grid>
            {
                className === 'white' &&
                <Grid container className={`appbar ${className}`}>
                    <Grid item md={12} className="noPadding">
                        <hr />
                    </Grid>
                </Grid>
            }
        </>
    )
}

export default AppBar