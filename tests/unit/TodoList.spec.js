import {mount, shallowMount} from '@vue/test-utils'
import TodoList from '@/components/TodoList.vue'
import TodoItem from "../../src/components/TodoItem";

describe('TodoList.vue', () => {
    it('should render component', () => {
        const wrapper = shallowMount(TodoList)
        expect(wrapper.exists()).toBe(true)
    })

    it('should render listGroup element', () => {
        const wrapper = shallowMount(TodoList)
        expect(wrapper.find('#listGroup').exists()).toBe(true)
    })

    it('should render successfully items props', () => {
        const wrapper = shallowMount(TodoList, {
            propsData: {
                items: [
                    {
                        text: "Deneme 1"
                    },
                    {
                        text: "Deneme 2"
                    },
                    {
                        text: "Deneme 3"
                    },
                ]
            }
        })
        expect(wrapper.findAllComponents(TodoItem).length).toBe(3)
    })

    it('should second item is equal to "Deneme 2"', () => {
        const wrapper = mount(TodoList, {
            propsData: {
                items: [
                    {
                        text: "Deneme 1"
                    },
                    {
                        text: "Deneme 2"
                    },
                    {
                        text: "Deneme 3"
                    },
                ]
            }
        })

        // expect(wrapper.findAll('#listGroup li').at(1).text()).toBe("Deneme 2") - SAME
        expect(wrapper.findAllComponents(TodoItem).at(1).find('div').text()).toBe("Deneme 2")
    })
})
