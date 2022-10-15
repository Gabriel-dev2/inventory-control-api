const { sequelize } = require('../database/models/index');
const { QueryTypes } = require('sequelize');

const report = async function (filter) {
    const sqlFilter = filtrate(filter);

    let consulta = `select
	                *
                    from
	                (
	                select
	                	i.name as 'nome',
	                	s.quantity as 'quantidade',
	                	'Saída' as 'tipo',
	                	0 as 'price',
	                	s.createdAt as 'createdAt'
	                from
	                	items as i
	                inner join outputs as s on
	                	(i.id = s.item_id)
	                where
	                	i.deletedAt is null
	                	and s.deletedAt is null
                    union
                    	select
                    		i.name as 'name',
                    		e.quantity as 'quantity',
                    		'Entrada' as 'tipo',
                    		e.price as 'price',
                    		e.createdAt as 'createdAt'
                    	from
                    		items as i
                    	inner join entries as e on
                    		(e.item_id = i.id)
                    	where
                    		i.deletedAt is null
                    		and e.deletedAt is null
                    ) as rl
                    where
                    1 ${sqlFilter}`;

    consulta += ` order by rl.createdAt desc`;
    const data = await sequelize.query(consulta, {
        raw: true,
        type: QueryTypes.SELECT
    })

    return data;
}

const filtrate = function(filter) {
    let sqlFilters = '';

    if (filter.dataInicial && filter.dataInicial.trim()) {
        sqlFilters += `and rl.createdAt >= '${filter.dataInicial} 00:00:00'`;
    }

    if (filter.dataFinal && filter.dataFinal.trim()) {
        sqlFilters += `and rl.createdAt >= '${filter.dataFinal} 00:00:00'`;
    }

    if (filter.name && filter.name.trim()) {
        sqlFilters += `and rl.name like '%${filter.name}%'`;
    }

    if (filter.tipo && filter.tipo.trim()) {
        sqlFilters += `and rl.tipo = '${filter.tipo}'`;
    }

    if (filter.quantity && filter.quantity.trim()) {
        sqlFilters += `and rl.quantity >= '${filter.quantity}'`;
    }

    return sqlFilters;
}

module.exports = {
    report: report
}