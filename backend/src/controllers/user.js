import { db } from "../database/db";

export const userRoutes = (_, res) => {
    const qry = 'SELECT * FROM projeto_musica';

    db.query(qry, (err, data) => {
        if (err)  return res.json(err);

       return res.status(200).json(data);
    })
}