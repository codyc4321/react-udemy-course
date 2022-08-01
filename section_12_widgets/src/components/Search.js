import React, {useState, useEffect} from 'react';

import axios from 'axios';


const Search = () => {

  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);

  // the second argument to use effect controls when it gets run
  // second argument one of 3 things,
  // either an empty array, an array with items, or nothing
  useEffect(() => {
    // the common way to feed a function is to set it to a variable and call it:
    const search = async () => {
      const {data} = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        }
      });

      setResults(data.query.search);
    };

    if (term && !results.length) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 700);

      return () => {
        clearTimeout(timeoutId);
      }
    }

    // one possible way to give a func here is to give a promise then call .then():
    // axios.get("the url")
    //   .then((response) => {
    //     console.log(response.data);
    //   });

    // use the fancy syntax, this defines a function and then immediately invokes it
    // (async () => {
    //   await axios.get("https://en.wikipedia.org/w/api.php");
    // })();

  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter search term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input" />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
}

export default Search;
