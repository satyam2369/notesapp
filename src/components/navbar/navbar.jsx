import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './navbar.css';

const Navbar =()=>{
    return(
        // <div style={{
        //   backgroundColor:'black',
        //   height:'8vh',
        //   borderBottomLeftRadius:20,
        //   borderBottomRightRadius:20,
          
        //   }}>
          // <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAt1BMVEXl5eXy8vL/3ED/qxXMzMwAAADm5ubt7e3d3d3h4eHU1NT+31v/3Dvj6vLJycnx9P/8sj7/1z3/sBv/4kFqamq5ubn6+vosJxVvYiWVhC6+qT3y00v62kn8sSbjniLJjh+bbxh3VBY5LRI4MhaEdSzcwESMZhlCMhG2oTfw0kG+iB0xJhEAAAmkkDaxfx4EDAwTEwzIsDrjyEGLi4smJiZ7e3udnZ0XFxd+XBggHBIkGgYxMTGpqak7djIZAAADqElEQVR4nO3b2XabMBAG4HEACWhLW4rjbHb23Vlab22d93+uCiRAGBKDfqc+OUdzhcxk5oskOPaFyKvHYG//4PLwaKdVfI+dVhEPR8cnp2fjejta/eD84vLoh4h2gPaEjCEcV9drCIOb2/bdOxPkbNzdv0EYP+x0629ASOfi8ek1wt5tZ4AJIUX8biSMHwwAZgSBeHyuExY/jQSGBCc+HqwS/vwyE5gSnHj0t0pYmAqMCcIw0Aljw1VACGItnjWC2U4ECWJPloQ9cwFCcOSzmRLGt+YCiODET4oALANKeJSEAQAACU58nxFukElACXcp4RzZCSjBGV4LwgU0CSghvhKEy60SnNGYBi2/oL0XYXhGyGtpE4T4lPa3TTihgy0TnGMCdyNOGNEhJsAJQwIfCJwQEyjACY4lWIIlWEKN8BmMDRA+ofENDfqKxhc0qIcGIzQswRI2S2CslLCVATUOtCxZh4soiurXvbU3RCFGfugXtQM/DIpW6Q01yLJYQ5Ysl17l5Zk2yG6whhvlgBHz3TRU7VBcRqGqng5c2ZcFWZbsK/9EZRWN8uryY9WWtMErWeIqqy0LKk6Utc04BU4OQo0js6isJ4urRtWB1lV5yiwxv27ZKe8q/0F1I+3E8qxAy3ILAjUXb0nIi0dUKx6VniKrmdAwxdoeybuyhqxsFgKtniouNwPLu6aDPKvcCvlcZZ2Ytvxca6Q66YNKltwLqq3a7dryq06yUSWLlYuSP5Ss3PdZda4NWD7glSymsli20yK3eN7CKArVgygMkdyA0qBniZkKmEYAIptx/XW0er12sBECFpZgCZZgCZZgCZZgCZZgCf+PgAbBBfLfZsYBzyKt72EJlvCBCPBjHaKxibcj+mbZAAENS7AES7AES7AES7AES/ggBNiAfgMPyOdg+GhQhE6kG0Hh9qnP13d5mwDGC022TAgnlMALARISmgagASRES/LQ/QgS+h55M3AzYE9EOBOEZdAD3go9HkARLtODKvPd7b2g+Tw7K7Pg6/u8E4HxqTy0NIGmASGkkyBPjxFiAAjMLw6wJVsi8KQ8xocshTkhW4biPGXf3GBM4P3qqdLQ2GBK4O6iSngyNhgSuDutnTA2XQszAu8v6oecxZ40QpgQmNqJqwQvMXo/dCcw7ideM0FMBO+O6EpgXJ+CGsFbzIOuy9GJwMQMzKfeWwTPm84i3tvt4GhLEN05C6LZcrVjjZBORTJ5ify2v3FaEgI/6k+SaUO7fydHqCivETlqAAAAAElFTkSuQmCC" alt="" style={{
          //   height:'4.5vh',
          //   marginLeft:'-95%',
          //   marginTop:10
          // }}/>

        // </div>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
  <a class="navbar-brand" href="#" style={{marginLeft:20,marginRight:10}}>
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAt1BMVEXl5eXy8vL/3ED/qxXMzMwAAADm5ubt7e3d3d3h4eHU1NT+31v/3Dvj6vLJycnx9P/8sj7/1z3/sBv/4kFqamq5ubn6+vosJxVvYiWVhC6+qT3y00v62kn8sSbjniLJjh+bbxh3VBY5LRI4MhaEdSzcwESMZhlCMhG2oTfw0kG+iB0xJhEAAAmkkDaxfx4EDAwTEwzIsDrjyEGLi4smJiZ7e3udnZ0XFxd+XBggHBIkGgYxMTGpqak7djIZAAADqElEQVR4nO3b2XabMBAG4HEACWhLW4rjbHb23Vlab22d93+uCiRAGBKDfqc+OUdzhcxk5oskOPaFyKvHYG//4PLwaKdVfI+dVhEPR8cnp2fjejta/eD84vLoh4h2gPaEjCEcV9drCIOb2/bdOxPkbNzdv0EYP+x0629ASOfi8ek1wt5tZ4AJIUX8biSMHwwAZgSBeHyuExY/jQSGBCc+HqwS/vwyE5gSnHj0t0pYmAqMCcIw0Aljw1VACGItnjWC2U4ECWJPloQ9cwFCcOSzmRLGt+YCiODET4oALANKeJSEAQAACU58nxFukElACXcp4RzZCSjBGV4LwgU0CSghvhKEy60SnNGYBi2/oL0XYXhGyGtpE4T4lPa3TTihgy0TnGMCdyNOGNEhJsAJQwIfCJwQEyjACY4lWIIlWEKN8BmMDRA+ofENDfqKxhc0qIcGIzQswRI2S2CslLCVATUOtCxZh4soiurXvbU3RCFGfugXtQM/DIpW6Q01yLJYQ5Ysl17l5Zk2yG6whhvlgBHz3TRU7VBcRqGqng5c2ZcFWZbsK/9EZRWN8uryY9WWtMErWeIqqy0LKk6Utc04BU4OQo0js6isJ4urRtWB1lV5yiwxv27ZKe8q/0F1I+3E8qxAy3ILAjUXb0nIi0dUKx6VniKrmdAwxdoeybuyhqxsFgKtniouNwPLu6aDPKvcCvlcZZ2Ytvxca6Q66YNKltwLqq3a7dryq06yUSWLlYuSP5Ss3PdZda4NWD7glSymsli20yK3eN7CKArVgygMkdyA0qBniZkKmEYAIptx/XW0er12sBECFpZgCZZgCZZgCZZgCZZgCf+PgAbBBfLfZsYBzyKt72EJlvCBCPBjHaKxibcj+mbZAAENS7AES7AES7AES7AES/ggBNiAfgMPyOdg+GhQhE6kG0Hh9qnP13d5mwDGC022TAgnlMALARISmgagASRES/LQ/QgS+h55M3AzYE9EOBOEZdAD3go9HkARLtODKvPd7b2g+Tw7K7Pg6/u8E4HxqTy0NIGmASGkkyBPjxFiAAjMLw6wJVsi8KQ8xocshTkhW4biPGXf3GBM4P3qqdLQ2GBK4O6iSngyNhgSuDutnTA2XQszAu8v6oecxZ40QpgQmNqJqwQvMXo/dCcw7ideM0FMBO+O6EpgXJ+CGsFbzIOuy9GJwMQMzKfeWwTPm84i3tvt4GhLEN05C6LZcrVjjZBORTJ5ify2v3FaEgI/6k+SaUO7fydHqCivETlqAAAAAElFTkSuQmCC" alt="" style={{
      height:'4.5vh'
    }}/>
    
    
  </a>
  <h3 style={{
    color:'white',
    marginTop:'0.3%',
    marginRight:'1%'
  }}>Notes</h3>
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#" style={{marginRight:'1%'}}>Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"style={{marginRight:'0%'}}>About Us</a>
    </li>
  </ul>
  <h3 class="statement" style={{
    color:'#FFFFE0',
    marginTop:'0.3%',
    marginLeft:'15%',
    fontFamily:'“Comic Sans MS”, “Comic Sans”, cursive',
    
  }}>You Will Write We Will Rember !!</h3>
</nav>
    );
}
export default Navbar;


