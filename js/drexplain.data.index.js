DR_EXPLAIN.namespace( 'DR_EXPLAIN.data_index' );
DR_EXPLAIN.data_index = {

	// index
	DREX_NODE_KEYWORDS: [2,5,6,7,2,3,4,4,3,7,5,2,2,5,6,2,5,7,5,7,2,7,5],
	DREX_NODE_KEYWORDS_START: [0,0,0,0,0,0,0,0,4,7,9,9,12,12,12,15,18,21], //length:= drex.nodes_count,
	DREX_NODE_KEYWORDS_END: [0,0,0,0,0,0,0,4,7,9,9,12,12,12,15,18,21,23], //length:= drex.nodes_count,

	DREX_KEYWORD_NAMES: ["<НОВОЕ КЛЮЧЕВОЕ СЛОВО>","Введите номер документа в ДО","заказ клиента","бюджет","статья бюджета","сделка","сопровождение","разработка"],
	DREX_KEYWORD_CHILD_START: [1,8,8,8,8,8,8,8],
	DREX_KEYWORD_CHILD_END: [8,8,8,8,8,8,8,8]
	
};