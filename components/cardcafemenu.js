import styled from "styled-components";

const StyledCardCafeMenu = styled.div`
  width: 100%;
  padding: 32px 22px 52px;
  margin: 12px 0px;
  background-color: #fffcf1;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 2px 2px 0px rgba(0, 0, 0, 0.16);
  color: #35610c;

  .menu-item-title-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h3 {
      margin: 0;
    }
  }

  p {
    margin: 0;
  }
`;

export default function CardCafeMenu({ menuCategories }) {
  return (
    <StyledCardCafeMenu>
      <h1>{menuCategories[0].title}</h1>

      {menuCategories[0].menu_items.map((item) => (
        <div key={item.id} item={item}>
          <div className="menu-item-title-wrapper">
            <h3>{item.title}</h3>
            <h3>{item.price}</h3>
          </div>
        </div>
      ))}
      <h1>{menuCategories[1].title}</h1>
      {menuCategories[1].menu_items.map((item) => (
        <div key={item.id} item={item}>
          <div className="menu-item-title-wrapper">
            <h3>{item.title}</h3>
            <h3>{item.price}</h3>
          </div>
          <p>{item.ingredients}</p>
        </div>
      ))}
    </StyledCardCafeMenu>
  );
}
