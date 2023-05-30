// Srart conditions: questions cards, div to start test and and div to finish test + test keys 

const questions = [
    `<fieldset class="card">
    <legend class="card__question">I ________________ from France.</legend>
    <div >
      <input type="radio" id="a" name="answer" value="a">
      <label for="a">is</label>
    </div>
    <div>
      <input type="radio" id="b" name="answer" value="b">
      <label for="b">are</label>
    </div>
    <div>
        <input type="radio" id="c" name="answer" value="c">
        <label for="c">am</label>
      </div>
      <div>
        <input type="radio" id="d" name="answer" value="d"> 
        <label for="d">be</label>
      </div>
    
</fieldset>
<div class="card__total">1/50</div>`,

`<fieldset class="card">
<legend class="card__question">This is my friend. _____________ name is Peter.</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">Her</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">Our</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">Yours</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">His</label>
  </div>
</fieldset>
<div class="card__total">2/50</div>`,
`<fieldset class="card">
<legend class="card__question">Mike is ______________.</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">my sister’s friend</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">friend my sister</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">friend from my sister</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">my sister friend’s</label>
  </div>
</fieldset>
<div class="card__total">3/50</div>`,
`<fieldset class="card">
<legend class="card__question">My brother is ______________ artist.</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">the</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">an</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">a</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">-</label>
  </div>
</fieldset>
<div class="card__total">4/50</div>`,
`<fieldset class="card">
<legend class="card__question">_______________ 20 desks in the classroom.</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">This is</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">There is</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">They are</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">There are</label>
  </div>
</fieldset>
<div class="card__total">5/50</div>`,
`<fieldset class="card">
<legend class="card__question">Paul ________________ romantic films.</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">likes not</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">don’t like</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">doesn’t like</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">isn’t likes</label>
  </div>
</fieldset>
<div class="card__total">6/50</div>`,
`<fieldset class="card">
<legend class="card__question">Sorry, I can’t talk. I _____________ right now.</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">driving</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">‘m driving</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">drives</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">drive</label>
  </div>
</fieldset>
<div class="card__total">7/50</div>`,
`<fieldset class="card">
<legend class="card__question">She _________________ at school last week.</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">didn't be</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">weren’t</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">wasn’t</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">isn’t</label>
  </div>
</fieldset>
<div class="card__total">8/50</div>`, 
`<fieldset class="card">
<legend class="card__question">I _________________ the film last night.</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">like</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">likes</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">liking</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">liked</label>
  </div>
</fieldset>
<div class="card__total">9/50</div>`,
`<fieldset class="card">
<legend class="card__question">__________________ a piece of cake? No, thank you.</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">Do you like</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">Would you like</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">Want you</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">Are you like</label>
  </div>
</fieldset>
<div class="card__total">10/50</div>`,
`<fieldset class="card">
<legend class="card__question">The living room is ___________________ than the bedroom.</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">more big</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">more bigger</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">biggest</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">bigger</label>
  </div>
</fieldset>
<div class="card__total">11/50</div>`,
`<fieldset class="card">
<legend class="card__question">The car is very old. We’re going ____________________ a new car soon.</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">to buy</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">buying</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">to will buy</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">buy</label>
  </div>
</fieldset>
<div class="card__total">12/50</div>`,
`<fieldset class="card">
<legend class="card__question">Jane is a vegetarian. She ____________________ meat.</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">sometimes eats</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">never eats</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">often eats</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">usually eats</label>
  </div>
</fieldset>
<div class="card__total">13/50</div>`,
`<fieldset class="card">
<legend class="card__question">There aren’t ________________ buses late in the evening.</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">some</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">any</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">no</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">a</label>
  </div>
</fieldset>
<div class="card__total">14/50</div>`,
`<fieldset class="card">
<legend class="card__question">The car park is _________________ to the restaurant.</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">next</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">opposite</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">behind</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">in front</label>
  </div>
</fieldset>
<div class="card__total">15/50</div>`,
`<fieldset class="card">
<legend class="card__question">Sue ________________ shopping every day.</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">is going</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">go</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">going</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">goes</label>
  </div>
</fieldset>
<div class="card__total">16/50</div>`,
`<fieldset class="card">
<legend class="card__question">They _________________ in the park when it started to rain heavily.</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">walked</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">were walking</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">were walk</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">are walking</label>
  </div>
</fieldset>
<div class="card__total">17/50</div>`,
`<fieldset class="card">
<legend class="card__question">________________ seen fireworks before?</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">Did you ever</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">Are you ever</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">Have you ever</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">Do you ever</label>
  </div>
</fieldset>
<div class="card__total">18/50</div>`,
`<fieldset class="card">
<legend class="card__question">We’ve been friends ____________________ many years.</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">since</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">from</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">during</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">for</label>
  </div>
</fieldset>
<div class="card__total">19/50</div>`,
`<fieldset class="card">
<legend class="card__question">You _________________ pay for the tickets. They’re free.</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">have to</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">don’t have</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">don’t need to</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">doesn’t have to</label>
  </div>
</fieldset>
<div class="card__total">20/50</div>`,
`<fieldset class="card">
<legend class="card__question">Jeff was ill last week and he _________________ go out.</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">needn't</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">can’t</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">mustn’t</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">couldn’t</label>
  </div>
</fieldset>
<div class="card__total">21/50</div>`,
`<fieldset class="card">
<legend class="card__question">These are the photos ________________ I took on holiday.</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">which</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">who</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">what</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">where</label>
  </div>
</fieldset>
<div class="card__total">22/50</div>`,
`<fieldset class="card">
<legend class="card__question">We’ll stay at home if it _______________ this afternoon.</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">raining</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">rains</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">will rain</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">rain</label>
  </div>
</fieldset>
<div class="card__total">23/50</div>`,
`<fieldset class="card">
<legend class="card__question">He doesn’t smoke now, but he __________________ a lot when he was young.</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">has smoked</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">smokes</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">used to smoke</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">was smoked</label>
  </div>
</fieldset>
<div class="card__total">24/50</div>`,
`<fieldset class="card">
<legend class="card__question">Mark plays football ___________________ anyone else I know.</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">more good than</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">as better as</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">best than</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">better than</label>
  </div>
</fieldset>
<div class="card__total">25/50</div>`,
`<fieldset class="card">
<legend class="card__question">I promise I __________________ you as soon as I’ve finished this cleaning.</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">will help</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">am helping</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">going to help</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">have helped</label>
  </div>
</fieldset>
<div class="card__total">26/50</div>`,
`<fieldset class="card">
<legend class="card__question">This town ___________________ by lots of tourists during the summer.</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">visits</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">visited</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">is visiting</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">is visited</label>
  </div>
</fieldset>
<div class="card__total">27/50</div>`,
`<fieldset class="card">
<legend class="card__question">He said that his friends ____________ to speak to him after they lost the football match.
</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">not want</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">weren’t</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">didn’t want</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">aren’t wanting</label>
  </div>
</fieldset>
<div class="card__total">28/50</div>`,
`<fieldset class="card">
<legend class="card__question">How about _________________ to the cinema tonight?
</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">going</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">go</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">to go</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">for going</label>
  </div>
</fieldset>
<div class="card__total">29/50</div>`,
`<fieldset class="card">
<legend class="card__question">Excuse me, can you ___________________ me the way to the station, please?
</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">give</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">take</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">tell</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">say</label>
  </div>
</fieldset>
<div class="card__total">30/50</div>`,
`<fieldset class="card">
<legend class="card__question">I wasn’t interested in the performance very much. ________________.
</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">I didn’t, too.</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">Neither was I.</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">Nor I did.</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">So I wasn’t.</label>
  </div>
</fieldset>
<div class="card__total">31/50</div>`,
`<fieldset class="card">
<legend class="card__question">Take a warm coat, _______________ you might get very cold outside.
</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">otherwise</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">in case</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">so that</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">in order to</label>
  </div>
</fieldset>
<div class="card__total">32/50</div>`,
`<fieldset class="card">
<legend class="card__question"> __________________ this great book and I can’t wait to see how it ends.
</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">I don’t read</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">I’ve read</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">I’ve been reading</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">I read</label>
  </div>
</fieldset>
<div class="card__total">33/50</div>`,
`<fieldset class="card">
<legend class="card__question">What I like more than anything else ___________________ at weekends.
</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">playing golf</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">to play golf</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">is playing golf</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">is play golf</label>
  </div>
</fieldset>
<div class="card__total">34/50</div>`,
`<fieldset class="card">
<legend class="card__question">She ________________ for her cat for two days when she finally found it in the garage.</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">looked</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">had been looked</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">had been looking</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">were looking</label>
  </div>
</fieldset>
<div class="card__total",>35/50</div>`,
`<fieldset class="card">
<legend class="card__question">We won’t catch the plane _________________ we leave home now! Please hurry up!</legend> 
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">if</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">providing that</label>
</div>
<div> 
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">except</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">unless</label>
  </div>
</fieldset>
<div class="card__total">36/50</div>`,
`<fieldset class="card">
<legend class="card__question">If I hadn’t replied to your email, I___________________ here with you now.</legend>  
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">can’t be</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">wouldn’t be</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">won’t be</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">haven’t been</label>
  </div>
</fieldset>
<div class="card__total">37/50</div>`,
`<fieldset class="card">
<legend class="card__question">Do you think you ___________________ with my mobile phone soon? I need to make a call.</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">finish</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">are finishing</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">will have finished</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">are finished</label>
  </div>
</fieldset>
<div class="card__total">38/50</div>`,
`<fieldset class="card">
<legend class="card__question">I don’t remember mentioning __________________ dinner together tonight.</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">go for</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">you going to</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">to go for</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">going for</label>
  </div>
</fieldset>
<div class="card__total">39/50</div>`,
`<fieldset class="card">
<legend class="card__question">Was it Captain Cook ______________ New Zealand?</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">who discovered</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">discovered</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">that discover</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">who was discovering</label>
  </div>
</fieldset>
<div class="card__total">40/50</div>`,
`<fieldset class="card">
<legend class="card__question">You may not like the cold weather here, but you’ll have to ________________, I’m afraid.</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">tell it off</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">sort itself out</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">put up with it</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">put it off</label>
  </div>
</fieldset>
<div class="card__total">41/50</div>`,
`<fieldset class="card">
<legend class="card__question">It’s cold so you should __________________ on a warm jacket.
</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">put</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">wear</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">dress</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">take</label>
  </div>
</fieldset>
<div class="card__total">42/50</div>`,
`<fieldset class="card">
<legend class="card__question">Paul will look ______________ our dogs while we’re on holiday.
</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">at</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">for</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">into</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">after</label>
  </div>
</fieldset>
<div class="card__total">43/50</div>`,
`<fieldset class="card">
<legend class="card__question">She ___________________ a lot of her free time reading.
</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">does </label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">spends</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">has</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">makes</label>
  </div>
</fieldset>
<div class="card__total">44/50</div>`,
`<fieldset class="card">
<legend class="card__question">Hello, this is Simon. Could I ___________________ to Jane, please?
</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">say</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">tell</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">call</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">speak</label>
  </div>
</fieldset>
<div class="card__total">45/50</div>`,
`<fieldset class="card">
<legend class="card__question">They’re coming to our house ___________________ Saturday.
</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">in</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">at</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">on</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">with</label>
  </div>
</fieldset>
<div class="card__total">46/50</div>`,
`<fieldset class="card">
<legend class="card__question">I think it’s very easy to ___________ debt these days.
</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">go into</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">become</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">go down to</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">get into</label>
  </div>
</fieldset>
<div class="card__total">47/50</div>`,
`<fieldset class="card">
<legend class="card__question">Come on! Quick! Let’s get _____________!
</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">highlight</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">cracking</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">massive</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">with immediate effect</label>
  </div>
</fieldset>
<div class="card__total">48/50</div>`,
`<fieldset class="card">
<legend class="card__question">I phoned her ____________ I heard the news.
</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">minute</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">during</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">by the time</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">the moment</label>
  </div>
</fieldset>
<div class="card__total">49/50</div>`,
`<fieldset class="card">
<legend class="card__question">I feel very ____________. I’m going to go to bed!
</legend>
<div >
  <input type="radio" id="a" name="answer" value="a">
  <label for="a">nap</label>
</div>
<div>
  <input type="radio" id="b" name="answer" value="b">
  <label for="b">asleep</label>
</div>
<div>
    <input type="radio" id="c" name="answer" value="c">
    <label for="c">sleepy</label>
  </div>
  <div>
    <input type="radio" id="d" name="answer" value="d">
    <label for="d">sleeper</label>
  </div>
</fieldset>
<div class="card__total">50/50</div>`
];

const lastCard = `<div class="test__text-wrap" id="test-preview">
<strong class="test__header">
    Вы ответили на 50 вопросов по шрамматике и лексике английского языка. Готовы узнать результат?
</strong>
<button class="test__finish" id="btn-finish"'>Узнать!</button>
</div>
<div class="test__img-wrap" id="preview-img">
<img class="test__img" src="assets/images/desktop/test.png" alt="Тест на уровень английского языка">
<div class="img-frame"></div>
</div>`;

const keys = [ 'c', 'd', 'a', 'b', 'd', 'c', 'b', 'c', 'd', 'b', 'd', 'a', 'b', 'b', 'a', 'd', 'b', 'c', 'd', 'c', 'd', 'a', 'b', 'c', 'd', 
'a', 'd', 'c', 'a', 'c', 'b', 'a', 'c', 'c', 'c', 'd', 'b', 'c', 'd', 'a', 'c', 'a', 'd', 'b', 'd','c', 'd', 'b', 'd', 'c'];

// Grab all elements we need at the start
const preview = document.getElementById('test-preview');
const image = document.getElementById('preview-img');
const btnSrart = document.getElementById('btn-start');
const testWrap =document.getElementById('test-wrap');
const btnNext = document.getElementById('nextQuestion');

const userAnswers = [];

// function startTest to hide the start div
const startTest = () => {
    preview.style.display = 'none';
    image.style.display = 'none';
}

// Show different questions from questionsArray and push the answers to the userAnswers array
let counter = 0;
const showQuestion = () => {

    if (counter < 50) {
        testWrap.innerHTML = questions[counter];

        let radioA = document.querySelector('#a');
        let radioB = document.querySelector('#b');
        let radioC = document.querySelector('#c');
        let radioD = document.querySelector('#d');

        radioA.onchange = function() {
            userAnswers.push('a');
            counter += 1;
            showQuestion();
        };
    
        radioB.onchange = function() {
            userAnswers.push('b');
            counter += 1;
            showQuestion();
        };
    
        radioC.onchange = function() {
            userAnswers.push('c');
            counter += 1;
            showQuestion();
        };
    
        radioD.onchange = function() {
            userAnswers.push('d');
            counter += 1;
            showQuestion();
        };
    }

    else {
        testWrap.innerHTML = lastCard;
        const totalPoints = countResult(keys, userAnswers);
        const userLevel = getUserLevel(totalPoints);

        const divResult = makeDivResult(totalPoints, userLevel);

        const showResult = (divResult) => {
            testWrap.innerHTML = divResult;
        };

        const resultBtn = document.getElementById('btn-finish');
        resultBtn.addEventListener('click', showResult(divResult));
    }
}

// countResult to compare keys array and usel answers array and count total points
const countResult = (keys, userAnswers) => {
    let points = 0;
    for (let i = 0; i < keys.length; i+=1) {
        points = (keys[i] === userAnswers[i]) ? points + 1 : points;
    }
    return points;
};

// When we got user points, use userLevel to check the English level 
const getUserLevel = (points) => {
    let level ='';

    if (points < 16) {
        level = '<a href="index.html#levelAO">Beginner</a>';
    }
    else if (points >= 16 && points <=24) {
        level = '<a href="index.html#levelA1A2">Elementary</a>';
    }
    else if (points >= 25 && points <= 32) {
        level = '<a href="index.html#levelA2B1">Pre-intermediate</a>';
    }
    else if (points >= 33 && points <= 39) {
        level = '<a href="index.html#levelB1B1+">Intermediate</a>';
    }
    else if (points >= 40 && points <= 45) {
        level = '<a href="index.html#levelB2">Upper Intermediate</a>';
    }
    else {
        level = '<a href="index.html#levelB2">Advanced</a>';
    }
    return level;
};

const makeDivResult = (totalPoints, userLevel) => {
    const divResult = `<div class="test__text-wrap" id="divResult">
        <strong class="test__header test__header--result">
        Здорово, вы набрали ${totalPoints} баллов!
        </strong>
        <p class="test__text">
        По результатам теста ваш уровень - ${userLevel}!
        </p>
        </div>
        <div class="test__img-wrap" id="preview-img">
        <img class="test__img" src="assets/images/desktop/test.png" alt="Тест на уровень английского языка">
        <div class="img-frame"></div>
        </div>`;
        return divResult;
}

btnSrart.addEventListener('click', startTest);

btnSrart.addEventListener('click', showQuestion);
