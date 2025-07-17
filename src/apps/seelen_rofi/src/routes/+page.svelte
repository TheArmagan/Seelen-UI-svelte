<script lang="ts">
  import { invoke } from "@tauri-apps/api/core";
  import { onMount } from "svelte";
  import {
    LauncherHistory,
    SeelenCommand,
    Settings,
    startThemingTool,
    UIColors,
  } from "@seelen-ui/lib";

  let name = $state("");
  let greetMsg = $state("");

  let apps = $state<any>([]);

  onMount(async () => {
    apps = await invoke(SeelenCommand.LauncherGetApps);
  });
</script>

<div class="container">
  {JSON.stringify(apps, null, 2)}
</div>

<style>
  .container {
    width: 300px;
    height: 300px;
    font-size: 14px;
    color: white;
    background-color: black;
  }
</style>
