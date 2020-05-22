import React, { FC, memo, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { KeyboardDateTimePicker, Button } from 'sp-ops-react-ui';
import { datetime } from 'sp-datetime-utils';

console.log(datetime);

export const ContactComponent: FC<RouteComponentProps> = ({ location }) => {
  const [time, setTime] = useState<datetime.Dayjs | null>(datetime());

  return (
    <div>
      <h2>Contact {process.env.REACT_APP_MF_CODE}</h2>
      <p>{location.pathname}</p>

      <form>
        <div>
          <KeyboardDateTimePicker value={time} onChange={t => setTime(t)} />

          <Button
            color="primary"
            onClick={() => console.log(time)}
            variant="contained"
          >
            Show
          </Button>
        </div>
      </form>
    </div>
  );
};

const Contact = memo(ContactComponent);
Contact.displayName = 'Contact';
export default Contact;
