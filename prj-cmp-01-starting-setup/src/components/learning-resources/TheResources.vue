<template>
  <base-card>
    <!-- vue allows you to add events to custom components that fall through to the root element -->
    <base-button @click="setTab('stored-resources')" :mode="storedResourceMode"
      >Stored Resources</base-button
    >
    <base-button @click="setTab('add-resource')" :mode="addResourceButtonMode"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The Official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.com',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.deleteResource,
    };
  },
  computed: {
    storedResourceMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResourceButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  methods: {
    setTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, desc, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: desc,
        link: url,
      };

      //add at beginning of array
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
    deleteResource(id) {
      // will not work bc this.storedResources does not update the original storedResources
      // this.storedResources = this.storedResources.filter((res=>res.id !== id))
      const index = this.storedResources.findIndex((res) => res.id === id);
      this.storedResources.splice(index, 1);
    },
  },
};
</script>
