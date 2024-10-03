import db from "../config/db.js";

const aluguelSchema = new db.Schema({
    dataAlugel: {
      type: Date,
      required: true,
    },
    dataDevolucao: {
      type: Date,
      required: true,
    },
    filme_id: {
      type: db.Schema.Types.ObjectId,
      ref: 'Filme',
      required: true,
    },
    user_id: {
      type: db.Schema.Types.ObjectId,
      ref: 'User', 
      required: true,
    },
  });

const Aluguel = db.model("Aluguel", aluguelSchema);

export default Aluguel;