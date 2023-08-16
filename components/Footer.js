

export default function Footer(props) {
    return (
      <footer className="p-4 mt-8 bg-green-500 text-gray-50" >
        <>{props.data.length} </>
        Locations World Wide
      </footer>

    )
  }