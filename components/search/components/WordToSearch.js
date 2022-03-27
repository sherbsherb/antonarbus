
export function WordToSearch(props) {

  function clickHandler(e) {
    alert('delete word')
  }

  return (
    <div className='word' onClick={clickHandler}>
      <span className='wordText'>{props.word}</span>
      <span className='deleteWord'></span>
      
      <style jsx>{`
        .word { 
          display: inline-block;
          position: relative;
          padding: 2px 5px ;
          margin-left: 5px;
          border: 1px solid rgba(165, 42, 42, 0.5);
          border-radius: 3px;
          box-shadow: 0 1px 2px rgba(165, 42, 42, 0.2);
          color: brown;
          font-size: 12px;
          font-family: 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
          text-decoration: none;
          font-weight: bold;
          cursor: pointer;
          vertical-align: middle;
          user-select: none;
        }
        .word:after {
          display: none;
          content: '✕';
          position: absolute;
          top: 50%; 
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 16px;
          color: rgb(251, 122, 122);
        }
        .word:hover.word:after {
          display: block;
        }

        .word:hover .wordText {
          visibility: hidden;
        }
      `}</style>
    </div>
  )
}