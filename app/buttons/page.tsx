import { Button } from "@/components/ui/button"

const ButtonsPage = () => {
  return (
    <>
      <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
        <Button>Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="primaryOutline">Primary Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondaryOutline">Secondary Outline</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="dangerOutline">Danger Outline</Button>
        <Button variant="super">Super</Button>
        <Button variant="superOutline">Super Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="sidebar">Sidebar</Button>
        <Button variant="sidebarOutline">Sidebar Outline</Button>
      </div>
      <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
        <a className="nes-btn font-bold font-dotgothic16" href="#">スタート</a>
        <a className="nes-btn font-pressStart2P" href="#">Start</a>
        <p>Normal</p>
        <br/>

        <button type="button" className="nes-btn is-primary font-bold font-dotgothic16">スタート</button>
        <button type="button" className="nes-btn is-primary font-pressStart2P">Start</button>
        <p>Primary</p>
        <br/>

        <button type="button" className="nes-btn is-success font-bold font-dotgothic16">スタート</button>
        <button type="button" className="nes-btn is-success font-pressStart2P">Start</button>
        <p>Success</p>
        <br/>

        <button type="button" className="nes-btn is-warning font-bold font-dotgothic16">スタート</button>
        <button type="button" className="nes-btn is-warning font-pressStart2P">Start</button>
        <p>Warning</p>
        <br/>

        <button type="button" className="nes-btn is-error font-bold font-dotgothic16">スタート</button>
        <button type="button" className="nes-btn is-error font-pressStart2P">Start</button>
        <p>Error</p>
        <br/>

        <button type="button" className="nes-btn is-disabled font-bold font-dotgothic16">スタート</button>
        <button type="button" className="nes-btn is-disabled font-pressStart2P">Start</button>
        <p>Disabled</p>
        <br/>

      </div>
    </>
  )
}

export default ButtonsPage