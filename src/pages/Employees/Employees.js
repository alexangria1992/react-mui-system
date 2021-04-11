import React from 'react'
import PageHeader from '../../components/PageHeader'
import EmployeeForm from './EmployeeForm'
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone'
import { makeStyles, Paper } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(4)
    }
}))

export default function Employees() {
    const classes = useStyles();
    return (
        <>
        <PageHeader
        title="New Employee"
        subtitle="Form Design with validation"
        icon={<PeopleOutlineTwoToneIcon fontSize="large"/>}
       />
       <Paper className={classes.pageContent}>
           <EmployeeForm />
       </Paper>
       </>
    )
}
