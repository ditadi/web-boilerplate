import { UserButton } from '@clerk/nextjs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from 'ui';

export default function Home() {
	return (
		<main className="flex gap-20 flex-col items-center justify-between p-24">
			<h1 className="text-4xl font-bold">Ditadi Boilerplate</h1>
			<UserButton />
			<Accordion type="single" collapsible className="w-full">
				<AccordionItem value="item-1">
					<AccordionTrigger>Is it accessible?</AccordionTrigger>
					<AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger>Is it styled?</AccordionTrigger>
					<AccordionContent>
						Yes. It comes with default styles that matches the other components aesthetic.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3">
					<AccordionTrigger>Is it animated?</AccordionTrigger>
					<AccordionContent>Yes. Its animated by default, but you can disable it if you prefer.</AccordionContent>
				</AccordionItem>
			</Accordion>
		</main>
	);
}
