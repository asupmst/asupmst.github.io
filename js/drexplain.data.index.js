DR_EXPLAIN.namespace( 'DR_EXPLAIN.data_index' );
DR_EXPLAIN.data_index = {

	// index
	DREX_NODE_KEYWORDS: [4,3,8,9,7,9,7,5,2,6,7,2,3,4,7,5,2,5,6,7,8,7,5,7,7,5,5,7,2,7,5,6,10,7,7,11,2,5,6,2,5,7,6],
	DREX_NODE_KEYWORDS_START: [0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,3,4,6,6,9,10,11,11,11,14,14,14,14,14,16,20,20,21,22,24,26,26,26,26,26,26,29,31,32,34,36,39,42,42,43,43,43,43,43,43,43,43,43,43,43], //length:= drex.nodes_count,
	DREX_NODE_KEYWORDS_END: [0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,3,4,6,6,9,10,11,11,11,14,14,14,14,14,16,20,20,21,22,24,26,26,26,26,26,26,29,31,32,34,36,39,42,42,43,43,43,43,43,43,43,43,43,43,43,43], //length:= drex.nodes_count,

	DREX_KEYWORD_NAMES: ["<НОВОЕ КЛЮЧЕВОЕ СЛОВО>","Введите номер документа в ДО","заказ клиента","бюджет","статья бюджета","сделка","сопровождение","разработка","отпуск","Планирование графика производства","тестирование","отражение работ"],
	DREX_KEYWORD_CHILD_START: [1,12,12,12,12,12,12,12,12,12,12,12],
	DREX_KEYWORD_CHILD_END: [12,12,12,12,12,12,12,12,12,12,12,12]
	
};