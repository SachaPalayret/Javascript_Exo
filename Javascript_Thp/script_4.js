const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

//Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70
{
    let filtered=[];
    i=0;
    j=0;

    while (entrepreneurs[i]){
        if (entrepreneurs[i].year>1970 && entrepreneurs[i].year < 1980) {
        filtered[j] = entrepreneurs[i];
        i++;
        j++;
        } else {
            i++;
        }
    }
    console.log(filtered);
}

//Sors une array qui contient le prénom et le nom des entrepreneurs
{
    let filtered_name=[];
    i=0;

    entrepreneurs.forEach(name => {
        filtered_name.push(name.first + " " + name.last)
      });
      console.log(filtered_name)
}
//Quel âge aurait chaque inventeur aujourd'hui ?
{
    let age=[];
    i=0;

    entrepreneurs.forEach(name => {
        age.push(name.first + " " + name.last + `aurait ${2019 - name.year} ans aujourd'hui`)
      });
      console.log(age)
}
//Trie les entrepreneurs par ordre alphabétique du nom de famille.
{
    function tri(a,b)
    {
    return (a.last > b.last)?1:-1;
    }

    entrepreneurs.sort(tri);
    console.log(entrepreneurs)
}