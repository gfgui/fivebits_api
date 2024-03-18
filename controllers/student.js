import { db } from "../connect.js"

export const addStudent = (req, res) => {

    const q = "INSERT INTO students (`name`, `email`, `date_born`, `eventid`) VALUES (?)"

    const values = [
        req.body.name,
        req.body.email,
        req.body.date_born,
        req.body.eventid
    ]

    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(values)
        return res.status(200).json("student has been created")
    })

}

//This function have login required
export const listStudents = (req, res) => {

    const q = `SELECT * FROM students AS s WHERE ? = s.eventid`

    db.query(q, req.body.eventid, (err, data) => {
        if (err) return res.status(500).json(values)
        return res.status(200).json(data)
    })

}