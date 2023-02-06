function fromJSONToHTMLTable(input) {

    let obj = JSON.parse(input);

    let htmlCode = '<table>\n    <tr>';

    let objKeys = obj[0];

    for (let el of Object.keys(objKeys)) {

        htmlCode += `<th>${escape(el)}</th>`;

    }

    htmlCode += '</tr>';

    for (let el of obj) {

        htmlCode += '\n    <tr>';

        for (let objValue in el) {

            htmlCode += `<td>${escape(el[objValue])}</td>`;

        }

        htmlCode += '</tr>';

    }

    htmlCode += '\n</table>'

    function escape(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    console.log(htmlCode);

}

fromJSONToHTMLTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`);