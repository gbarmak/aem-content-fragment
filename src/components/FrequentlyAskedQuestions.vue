<template>
  <section class="faq">
    <header>
      <h1 class="faq__header">Frequently Asked Questions</h1>
      <p class="faq__intro_text">Please click on any question below to view the response. If you need further assistance, please contact your SSA.</p>
    </header>
      <ul class="faq__list">
        <li class="faq__item" v-for="item in faqs">
          <div class="faq__question">
            <div class="faq__text">{{ item["jcr:content"].data.master.question }}</div>
            <div class="faq__expand"><i id="expand-icon-1" class="material-icons mdc-list-item__meta">expand_less</i></div>
          </div>
          <div class="faq__answer" v-html="item['jcr:content'].data.master.answer">
          </div>
        </li>
        <!-- <li class="faq__item faq__item--active">
          <div class="faq__question">
            <div class="faq__text">How do I reset my password?</div>
            <div class="faq__expand"><i id="expand-icon-0" class="material-icons mdc-list-item__meta">expand_more</i></div>
          </div>
          <div class="faq__answer">
            <p>From the login screen, select "Forgot password". Enter your username and then click Submit. An email will be sent to you containing a URL link to reset your password.</p>
          </div>
        </li> -->
      </ul>
  </section>
</template>

<style scoped>
  .faq{
    padding: 24px 64px;
    color: #45423c;
    width: 716px;
  }
  .faq__header{
    font-size: 34px;
    font-weight: 400;
  }
  .faq__intro_text{
    font-size: 16px;
    font-weight: 500;
    line-height: 28px;
    padding-bottom:36px;
  }
  .faq__list{
    list-style-type:none;
    margin: 0;
    padding: 0;
  }
  .faq__item{
    padding: 16px;
    font-size: 16px;
    font-family: whitney,Whitney SSm A,Whitney SSm B,helvetica,arial,sans-serif;
  }
  .faq__question{
    display: flex;
    justify-content: space-between;
  }
  .faq__answer{
    font-size: 14px;
    font-weight: 300;
    padding-right: 25px;
  }
  .faq__text{
    padding-top: 5px;
  }
</style>

<script>
export default {
  beforeMount() {
    const self = this;
    fetch('/content/dam/bayer/faqs.infinity.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      const filteredJson = {};
      for(let key in json){
        if(!key.includes("jcr:")){
          filteredJson[key] = json[key];
        }
      }
      self.faqs = filteredJson;
    })
  },
  data() {
    return {
      faqs: ''
    };
  },
};
</script>
