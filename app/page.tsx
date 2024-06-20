// https://github.com/nextui-org/nextui/issues/1403#issuecomment-1678863519
'use client';

import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { Switch } from '@nextui-org/switch';
import { Heading, Text } from 'enefit-design-system';
import { Tabs, Tab, Button } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DatePicker } from '@nextui-org/date-picker';

export default function Home() {
    const params = useSearchParams();
    const [selectedTab, setSelectedTab] = useState('day');

    useEffect(() => {
        const selectedTab = params.get('tab');
        selectedTab && setSelectedTab(selectedTab);
    }, []);

    function handleSubmit(e: any) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formObj = {} as any;
        formData.forEach((value, key) => {
            formObj[key] = value;
        });

        console.log(formObj);
    }

    return (
        <main className='p-12 flex flex-col gap-12'>
            <form
                onSubmit={(e) => handleSubmit(e)}
                className='grid grid-cols-3 gap-4'
            >
                <div className='col-span-2'>
                    <Tabs
                        aria-label='Options'
                        destroyInactiveTabPanel={false}
                        classNames={{
                            tabList: 'bg-transparent h-auto',
                            cursor: 'shadow-none border-b-2 rounded-none',
                            tab: 'h-full items-start data-[hover=true]:text-[var(--colour-brand-secondary-650)]',
                        }}
                        selectedKey={selectedTab}
                        onSelectionChange={setSelectedTab as any}
                    >
                        <Tab
                            key='day'
                            title={
                                <div className='flex items-start flex-col h-auto'>
                                    <Heading variant='h5' as='p'>
                                        Day
                                    </Heading>
                                    <Text size='small'>Description</Text>
                                </div>
                            }
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </Tab>
                        <Tab
                            key='week'
                            title={
                                <div className='flex items-start flex-col h-auto'>
                                    <Heading variant='h5' as='p'>
                                        Week
                                    </Heading>
                                    <Text size='small'>Description</Text>
                                </div>
                            }
                        >
                            <DatePicker
                                label='Date'
                                labelPlacement='outside'
                                className='max-w-[284px] mb-16'
                                name='date'
                                isRequired
                                validationBehavior='native'
                            />
                            <Button type='submit'>Submit</Button>
                        </Tab>
                        <Tab
                            key='month'
                            title={
                                <div className='flex items-start flex-col h-auto'>
                                    <Heading variant='h5' as='p'>
                                        Month
                                    </Heading>
                                    <Text size='small'>Description</Text>
                                </div>
                            }
                        >
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </Tab>
                        <Tab
                            key='year'
                            title={
                                <div className='flex items-start flex-col h-auto'>
                                    <Heading variant='h5' as='p'>
                                        Year
                                    </Heading>
                                    <Text size='small'>Description</Text>
                                </div>
                            }
                        >
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </Tab>
                    </Tabs>
                </div>

                <div className='bg-default-100 rounded p-4 flex flex-col gap-8'>
                    <ul className='flex flex-col gap-4'>
                        <li className='justify-between flex'>
                            <Text>Used day</Text>
                            <Text
                                className='text-[var(--colour-brand-primary-550)]'
                                weight={600}
                            >
                                3.5kWh
                            </Text>
                        </li>
                        <li className='justify-between flex'>
                            <Text>Used day</Text>
                            <Text
                                className='text-[var(--colour-brand-primary-550)]'
                                weight={600}
                            >
                                3.5kWh
                            </Text>
                        </li>
                        <li className='justify-between flex'>
                            <Text>Used day</Text>
                            <Text
                                className='text-[var(--colour-brand-primary-550)]'
                                weight={600}
                            >
                                3.5kWh
                            </Text>
                        </li>
                        <li className='justify-between flex'>
                            <Text>Used day</Text>
                            <Text
                                className='text-[var(--colour-brand-primary-550)]'
                                weight={600}
                            >
                                3.5kWh
                            </Text>
                        </li>
                    </ul>

                    <Text>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Asperiores adipisci
                    </Text>

                    <div className='flex flex-col gap-4'>
                        <Switch defaultSelected name='first-switch'>
                            Some label
                        </Switch>
                        <Switch defaultSelected name='second-switch'>
                            Some label
                        </Switch>
                        <Switch defaultSelected name='third-switch'>
                            Some label
                        </Switch>
                    </div>
                </div>
            </form>

            <div>
                <Accordion
                    itemClasses={{
                        trigger:
                            'flex-row-reverse data-[hover=true]:bg-default-100 data-[focus=true]:bg-default-100 p-4 data-[focus-visible=true]:shadow-[inset_0_0_0_4px_var(--eds-colour-action-text-button-secondary-focus)] !outline-none',
                        content: 'p-4 pl-10',
                    }}
                    variant='shadow'
                    className='p-0 shadow-small overflow-hidden'
                >
                    <AccordionItem
                        key='1'
                        aria-label='Accordion 1'
                        title='Accordion 1'
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionItem>
                    <AccordionItem
                        key='2'
                        aria-label='Accordion 2'
                        title='Accordion 2'
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionItem>
                    <AccordionItem
                        key='3'
                        aria-label='Accordion 3'
                        title='Accordion 3'
                    >
                        <div>
                            <Switch
                                defaultSelected
                                aria-label='Automatic updates'
                            />
                        </div>
                    </AccordionItem>
                </Accordion>
            </div>
        </main>
    );
}
