import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId = 'tab-1', onTabSelected }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({ 'is-active': tab.id === activeTabId })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={
                  activeTabId !== tab.id
                    ? () => onTabSelected(tab.id)
                    : undefined
                }
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
