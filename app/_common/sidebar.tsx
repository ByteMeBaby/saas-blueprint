import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { OrganizationSwitcher } from "@clerk/clerk-react";

export default function SideBar() {
  return (
    <aside className="flex pl-3 flex-col h-full text-nowrap w-full">
      <div className="mt-3">
        <OrganizationSwitcher
          appearance={{
            elements: {
              organizationSwitcherTrigger: {
                width: "100%!important",
                outline: "none",
                "&:focus": {
                  boxShadow: "none!important",
                },
                display: "flex",
                background: "transpaent",
                "&:hover": {
                  background: "transparent",
                },
                padding: 0,
              },
              rootBox: {
                width: "100%!important",
                padding: "6px 0px",
                background: "none",
                borderRadius: "4px",
                marginBottom: "10px",
              },
            },
          }}
        />
      </div>
      <nav className="flex-grow w-full overflow-auto">
        <div className="w-full">
          <Accordion
            type="single"
            collapsible
            className="w-full border-0"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1" className="border-0 mb-3">
              <AccordionTrigger className="border-0 hover:bg-gray-50 py-1 rounded">
                Is it accessible?
              </AccordionTrigger>

              <AccordionContent>
                <div className="px-4 py-2">This is another item</div>
                <div className="p-4">This is another item</div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-0">
              <AccordionTrigger className="border-0 hover:bg-gray-50 py-1 rounded">
                Is it accessible?
              </AccordionTrigger>

              <AccordionContent>
                <div className="px-4 py-2">This is another item</div>
                <div className="p-4">This is another item</div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-0">
              <AccordionTrigger>Is it styled?</AccordionTrigger>

              <AccordionContent>
                <div className="px-4 py-2">This is another item</div>
                <div className="p-4">This is another item</div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </nav>
      <footer className="p-3"></footer>
    </aside>
  );
}
