const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { title, description, value} = request.body;
        const ong_id = request.headers.authorization;


        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        })

        return response.json({ id });
    },

    async index(request, response){

        // tipo de parametro query, onde sera passado a paginacao
        const { page = 1 } = request.query;

        const count = await connection('incidents').count();
        
        // mostrar no header(ao inves do body) o total de casos
        response.header('X-Total-Count', count[0]['count(*)'])


        // limit(5) irá retornar 5 registros de cada vez
        // offset irá pular 5 registros por pagina
        //join ira juntar com a tabela ongs, onde o id da ong foi o mesmo id da ong que criou o incident
        // irá selecionar todos os incidents daquele ong, porem nao ira retornar o ong.id, ja que eh o mesmo do incidentds.ong_id
        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset( (page-1) * 5 )
            .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);
        
        return response.json(incidents);
    },

    async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;

         const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();
        
        if(incident.ong_id != ong_id){
            return response.status(401).json({ error: "Operation not permitted."});
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();


    },

}