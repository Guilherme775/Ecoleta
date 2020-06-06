import { Request, Response } from "express";
import connection from "../database/connection";

class ItensController {
  async index(req: Request, res: Response) {
    const items = await connection("items").select("*");

    const serializedItens = items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://10.0.0.111:3333/uploads/${item.image}`,
      };
    });

    return res.json(serializedItens);
  }
}

export default ItensController;
