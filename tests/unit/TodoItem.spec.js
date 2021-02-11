import {shallowMount} from '@vue/test-utils'
import TodoItem from "../../src/components/TodoItem";

describe('TodoItem.vue', () => {
    it('should render component', () => {
        const wrapper = shallowMount(TodoItem, {
            propsData: {
                item: {
                    text: "Deneme 1"
                }
            }
        })
        expect(wrapper.exists()).toBe(true)
    })

    it('should render props data successfully', () => {
        const wrapper = shallowMount(TodoItem, {
            propsData: {
                item: {
                    text: "Deneme 1"
                }
            }
        })
        expect(wrapper.text()).toBe("Deneme 1")
    })
})
