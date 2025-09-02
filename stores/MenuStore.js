import { defineStore } from 'pinia'

export const useMenuStore = defineStore('MenuStore', {
  state: () => ({
    isMenuOpen: false,
    activeSection: ''
  }),

  getters: {
    getIsMenuOpen: (state) => state.isMenuOpen,
    getActiveSection: (state) => state.activeSection,
  },

  actions: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    setActiveSection(section) {
      this.activeSection = section
    }
  }
})