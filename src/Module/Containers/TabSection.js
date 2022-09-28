import React, { Fragment, FunctionComponent } from 'react'
import Grid from '@material-ui/core/Grid'

type TabProps = {
    tabs: Array<string>,
    handleChange: (index: number) => void,
    tabIndex: number
}

const TabSection: FunctionComponent<TabProps> = ({ tabs, handleChange, tabIndex }) => {
    return (
        <Fragment>
            <Grid container>
                {
                    tabs.map((elm: any, i: number) => (
                        <Grid item key={elm}>
                            <div className="tab-name" onClick={() => { handleChange(i) }}>{elm}</div>
                            {tabIndex === i && <div className="active" />}
                        </Grid>
                    ))
                }
            </Grid>
            <hr />
        </Fragment>
    )
}

export default TabSection