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

  let apps = $state<any>([]);

  onMount(async () => {
    apps = await invoke(SeelenCommand.LauncherGetApps);
  });
</script>

<div class="w-full h-full flex items-center justify-center">
  <div class="w-128 h-128 text-sm text-white bg-black">
    {JSON.stringify(apps, null, 2)}
  </div>
</div>
