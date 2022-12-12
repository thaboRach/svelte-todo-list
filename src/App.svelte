<script>
  import { todoList } from './services/store';
  import Button from './components/Button.svelte';
  import Header from './components/Header.svelte';
  import List from './components/List.svelte';

  import plusIcon from './assets/plus.svg';
  import crossIcon from './assets/cross.svg';
  import tickIcon from './assets/tick.svg';

  let newTodo;
  let showInput = false;
  let inputRef;

  function showNewTodo() {
    showInput = true;
    setTimeout(() => inputRef.focus(), 100);
  }
  function hideNewTodo() {
    showInput = false;
  }
  function addNewTodo() {
    if (newTodo) {
      const key = $todoList.length;
      todoList.update(val => [...val, { key, label: newTodo, done: false }]);
      newTodo = '';
      inputRef.focus();
    }
  }
  function keyPress(event) {
    if (event.key === 'Enter') {
      addNewTodo();
    }
  }
</script>

<Header />
<main on:keydown={keyPress}>
  <List />
  <div class:showInput>
    <section>
      <input bind:value={newTodo} type="text" bind:this={inputRef} maxlength="10" />
      <Button onClick={addNewTodo}>
        <img slot="content" class="logo" src={tickIcon} alt="Confirm" />
      </Button>
      <Button onClick={hideNewTodo}>
        <img slot="content" class="logo" src={crossIcon} alt="Reject" />
      </Button>
    </section>
  </div>
  <Button onClick={showNewTodo} round>
    <img slot="content" class="logo" src={plusIcon} alt="Add" />
  </Button>
</main>

<style lang="scss">
  @import 'styles/variables.scss';

  main {
    background-color: $primary-color;
    color: $white;
    width: 100%;

    @media screen and (min-width: $mobile) {
      width: 500px;
    }

    div {
      display: none;
      grid-template-columns: 20% 80%;
      padding-top: 1rem;
      padding-bottom: 1rem;

      &.showInput {
        display: grid;
      }

      > section {
        display: flex;
        gap: 1rem;
        grid-column-start: 2;
        justify-self: start;
        input {
          font-size: 2rem;
          line-height: 2rem;
          background: $primary-color;
          color: $secondary-color;
          border: none;
          outline: none;
          width: 8rem;
        }
      }
    }

    .logo {
      height: 1.5rem;
      width: 1.5rem;
    }
  }
</style>
