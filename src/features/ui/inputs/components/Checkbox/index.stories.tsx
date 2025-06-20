import CheckboxComponent from '@/features/ui/inputs/components/Checkbox'
import { Meta, StoryObj } from '@storybook/nextjs'
import { useArgs } from 'storybook/preview-api'

const meta = {
    title: 'ui/inputs/Checkbox',
    decorators: (Story) => (
        <div className="w-[250px]">
            <Story />
        </div>
    ),
    render: (args) => {
        const [, updateArgs] = useArgs()

        const handleChange = (checked: boolean) => updateArgs({ checked })

        return <CheckboxComponent {...args} onChange={handleChange} />
    },
    args: {
        checked: false,
        id: 'checkbox',
        label: 'Checkbox',
        focusable: false,
        onChange: () => {},
    },
    argTypes: {
        id: { table: { disable: true } },
        onChange: { table: { disable: true } },
    },
} satisfies Meta<typeof CheckboxComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Checkbox: Story = {}
