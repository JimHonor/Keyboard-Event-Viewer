export default function ViewerTable({
  keyboardEventProps,
  keyboardEventValues,
  eventType,
}) {
  return (
    <table className="w-full text-center">
      <thead>
        <tr>
          {["#", "Event Type", ...keyboardEventProps].map((prop) => (
            <th
              className="border-y border-solid border-stone-300 text-sm py-2 bg-slate-100 w-[12.5%]"
              key={prop}
            >
              {prop}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {keyboardEventValues.length ? (
          keyboardEventValues.map((values, i, array) => {
            const order = `0${(array.length - i).toString()}`.slice(-2);
            return (
              <tr key={i}>
                {[order, eventType, ...values].map((value, index) => (
                  <td
                    className="py-2 border-b border-solid border-stone-200 w-[12.5%]"
                    key={index}
                  >
                    {value.toString()}
                  </td>
                ))}
              </tr>
            );
          })
        ) : (
          <tr>
            <td
              colSpan={keyboardEventProps.length + 2}
              rowSpan="3"
              className="py-2 border-b border-solid border-stone-200 text-slate-600"
            >
              随便按个键试试...
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
