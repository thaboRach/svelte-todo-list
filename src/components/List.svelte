<script>
  import Item from './Item.svelte';
  import { todoList } from '../services/store';
</script>

<ul>
  {#each $todoList as { label, done }, index}
    <Item {label} {done} {index} />
  {/each}
</ul>
