$(function(){$(".table-list").each(function(){$(this).find("tbody > tr").length||$(this).find("tbody").append($("<tr />").append($("<td />").attr("colspan",$(this).find("thead th").length).text("沒有任何資料。")))})});