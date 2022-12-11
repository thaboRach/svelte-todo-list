<script>
  import { todoList } from './services/store';
  import Button from './components/Button.svelte';
  import Header from './components/Header.svelte';
  import List from './components/List.svelte';

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
      <button on:click={addNewTodo}>
        <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="17" height="17"
          ><path d="M1 7l4.5 4.5L14 3" stroke="currentColor" stroke-linecap="square" /></svg
        >
      </button>
      <button on:click={hideNewTodo}>
        <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="17" height="17"
          ><path d="M4.5 4.5l6 6m-6 0l6-6" stroke="currentColor" /></svg
        >
      </button>
    </section>
  </div>
  <Button on:addTodo={showNewTodo} />
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

        button {
          background-color: $white;
          border: none;
          text-align: center;
          height: 2.5rem;
          width: 2.5rem;
          cursor: pointer;
          &:hover {
            background-color: $secondary-color;
            transition: 0.7s;
          }
          &:active {
            background-color: $primary-color;
          }
        }
      }
    }
  }
</style>
